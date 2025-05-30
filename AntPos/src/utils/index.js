import { toast } from 'frappe-ui'

export function createToast(options) {
	toast.create({
		position: 'top-center',
		...options,
	})
}
export function showToast(title, text, icon, bgColor = null, textColor = null, iconClasses = null) {
    if (!iconClasses) {
        iconClasses = icon === 'check' 
            ? 'bg-surface-green-3 text-ink-white rounded-md p-px' 
            : icon === 'alert-circle' 
            ? 'bg-yellow-600 text-ink-white rounded-md p-px' 
            : 'bg-surface-red-5 text-ink-white rounded-md p-px';
    }

    createToast({
        title: title,
        message: htmlToText ? htmlToText(text) : text,
        icon: icon,
        iconClasses: iconClasses,
        timeout: 5,
        style: {
            backgroundColor: bgColor || 'white',
            color: textColor || 'black' 
        },
    });
}
function htmlToText(html) {
    let div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}