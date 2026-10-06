// Reads barcodes and QR codes from the device camera.
//
// Chrome on Android has a built-in BarcodeDetector; everywhere else (iOS
// Safari, Firefox, desktop) the ZXing decoder is loaded on first use, so it
// costs nothing until the camera is opened.

const FORMATS = [
  'qr_code',
  'ean_13',
  'ean_8',
  'upc_a',
  'upc_e',
  'code_128',
  'code_39',
  'code_93',
  'codabar',
  'itf',
  'data_matrix',
  'pdf417',
]

export function cameraSupport() {
  if (!window.isSecureContext) return 'insecure'
  if (!navigator.mediaDevices?.getUserMedia) return 'unsupported'
  return 'ok'
}

async function nativeDetector() {
  if (!('BarcodeDetector' in window)) return null
  try {
    const supported = await window.BarcodeDetector.getSupportedFormats()
    const formats = FORMATS.filter((f) => supported.includes(f))
    return formats.length ? new window.BarcodeDetector({ formats }) : null
  } catch {
    return null
  }
}

// Starts the rear camera in `video` and calls onCode(text) for every code
// read. Returns { stop, track }.
export async function startScanner(video, onCode) {
  const stream = await navigator.mediaDevices.getUserMedia({
    audio: false,
    video: {
      facingMode: { ideal: 'environment' },
      width: { ideal: 1280 },
      height: { ideal: 720 },
    },
  })
  video.srcObject = stream
  video.setAttribute('playsinline', '')
  video.muted = true
  await video.play()

  const track = stream.getVideoTracks()[0]
  let stopped = false
  let stopDecoder = () => {}

  const detector = await nativeDetector()
  if (detector) {
    let busy = false
    const timer = setInterval(async () => {
      if (stopped || busy || video.readyState < 2) return
      busy = true
      try {
        const codes = await detector.detect(video)
        if (!stopped && codes.length) onCode(codes[0].rawValue)
      } catch {
        // A frame that cannot be read is simply skipped.
      } finally {
        busy = false
      }
    }, 150)
    stopDecoder = () => clearInterval(timer)
  } else {
    const { BrowserMultiFormatReader } = await import('@zxing/browser')
    const reader = new BrowserMultiFormatReader(undefined, {
      delayBetweenScanAttempts: 150,
    })
    if (stopped) return { stop() {}, track }
    const controls = await reader.decodeFromVideoElement(video, (result) => {
      if (!stopped && result) onCode(result.getText())
    })
    stopDecoder = () => controls.stop()
  }

  return {
    track,
    stop() {
      stopped = true
      stopDecoder()
      stream.getTracks().forEach((t) => t.stop())
      video.srcObject = null
    },
  }
}

export function cameraErrorMessage(error) {
  switch (error?.name) {
    case 'NotAllowedError':
    case 'SecurityError':
      return 'Camera access was blocked. Allow the camera for this site in the browser settings.'
    case 'NotFoundError':
    case 'OverconstrainedError':
      return 'No camera was found on this device.'
    case 'NotReadableError':
      return 'The camera is being used by another app.'
    default:
      return error?.message || 'The camera could not be started.'
  }
}
