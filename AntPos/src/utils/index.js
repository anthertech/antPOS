import { toast, createResource } from 'frappe-ui'

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

export function generateTempName(doctype) {
    const suffix = Math.random().toString(36).substring(2, 10)
    return `new-${doctype.toLowerCase().replace(/\s/g, "-")}-${suffix}`
};

// Factory function (can also be extracted to a separate file)
export function createDoctypeResource(doctype, onSuccessCallback) {
    return createResource({
        url: 'ant_pos.ant_pos.api.get_doc_field',
        method: 'POST',
        auto: false,
        makeParams(params) {
            return {
                doctype,
                ...params
            }
        },
        onSuccess(data) {
            if (data) {
                onSuccessCallback(data)
            }
        }
    })
};