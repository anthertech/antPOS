import { toast } from 'frappe-ui'

export function createToast(options) {
	toast({
		position: 'bottom-right',
		...options,
	})
}
export function showToast(title, text, icon, iconClasses = null) {
	if (!iconClasses) {
		if (icon == 'check') {
			iconClasses = 'bg-surface-green-3 text-ink-white rounded-md p-px'
		} else if (icon == 'alert-circle') {
			iconClasses = 'bg-yellow-600 text-ink-white rounded-md p-px'
		} else {
			iconClasses = 'bg-surface-red-5 text-ink-white rounded-md p-px'
		}
	}
	createToast({
		title: title,
		text: htmlToText(text),
		icon: icon,
		iconClasses: iconClasses,
		position: icon == 'check' ? 'bottom-right' : 'top-center',
		timeout: 5,
	})
}