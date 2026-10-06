<div align="center">

<img src="ant_pos/public/antPOS.png" alt="antPOS logo" width="96" />

# antPOS

**A fast, modern point of sale for ERPNext**

Built on Frappe and Frappe UI. Works on desktop, tablet and phone, and installs as an app.

[![Frappe](https://img.shields.io/badge/Frappe-v15-0089FF?style=flat-square)](https://frappe.io/framework)
[![ERPNext](https://img.shields.io/badge/ERPNext-v15-0089FF?style=flat-square)](https://frappe.io/erpnext)
[![Vue](https://img.shields.io/badge/Vue-3-42b883?style=flat-square&logo=vuedotjs&logoColor=white)](https://vuejs.org)
[![PWA](https://img.shields.io/badge/PWA-ready-5A0FC8?style=flat-square&logo=pwa&logoColor=white)](#features)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=flat-square)](license.txt)

[Features](#features) · [Screenshots](#screenshots) · [Installation](#installation) · [Setup](#setup) · [Contributing](#contributing) · [License](#license)

<br />

<img src="screenshots/pos-desktop.png" alt="antPOS on desktop" width="100%" />

</div>

<br />

## Features

| | |
|---|---|
| 🛒 **Fast checkout** | Scan barcodes, serial and batch numbers, or tap items from a list with the most moving items first. |
| 📷 **Camera scanning** | Scan barcodes and QR codes with the phone camera. |
| 💳 **Flexible payments** | Split across payment methods, give change, sell on credit and use customer advances. |
| 🏷️ **Discounts and rates** | Per line or for the whole sale, as the POS Profile allows. |
| ⏸️ **Held sales and returns** | Park a sale and pick it up later, or return items from a past invoice. |
| 📦 **Sales orders** | Create a Sales Order together with the invoice when needed. |
| 🕒 **Shifts** | Open and close cashier shifts with a cash count per payment method. |
| 🧾 **Standard ERPNext documents** | Sales, returns and payments are normal Sales Invoices and Payment Entries. |
| 🧩 **Customisable forms** | Admins change the New customer form and cart line details right from the POS. |
| 🌗 **Themes** | Light, dark and automatic, shared with the Frappe desk. |
| 📱 **Installable app** | Install as a PWA on desktop, Android and iOS. |

## Screenshots

<table>
  <tr>
    <td width="50%"><img src="screenshots/payment.png" alt="Payment" /></td>
    <td width="50%"><img src="screenshots/held.png" alt="Held sales" /></td>
  </tr>
  <tr>
    <td align="center"><b>Payment</b></td>
    <td align="center"><b>Held sales</b></td>
  </tr>
  <tr>
    <td width="50%"><img src="screenshots/pos-desktop-dark.png" alt="Dark mode" /></td>
    <td width="50%"><img src="screenshots/settings.png" alt="Settings" /></td>
  </tr>
  <tr>
    <td align="center"><b>Dark mode</b></td>
    <td align="center"><b>Settings</b></td>
  </tr>
</table>

<p align="center"><b>On the phone</b></p>

<p align="center">
  <img src="screenshots/mobile-items.png" alt="Items on mobile" width="30%" />
  &nbsp;
  <img src="screenshots/mobile-cart.png" alt="Cart on mobile" width="30%" />
  &nbsp;
  <img src="screenshots/mobile-scanner.png" alt="Camera scanning" width="30%" />
</p>

## Installation

> **Requirements:** Frappe and ERPNext **v15**

```bash
cd ~/frappe-bench
bench get-app ant_pos https://github.com/anthertech/antPOS.git
bench --site yoursite.com install-app ant_pos
bench --site yoursite.com migrate
bench build --app ant_pos
```

Then open **`https://yoursite.com/antPOS`**.

## Setup

1. **Mode of Payment:** add an account for your company to each payment method you want to use.
2. **POS Profile:** set the company, warehouse, price list and payment methods, and add your cashiers under *Applicable for Users*.
3. **Users:** give cashiers the **POS Cash** or **POS Billing** role.
4. **Start selling:** open `/antPOS`, start a shift, pick a customer and add items.

> [!NOTE]
> The camera and the installable app need the site to be served over **HTTPS**.

### Roles

| Role | Can do |
|---|---|
| **POS Cash** | Open and close their shift, sell, take payments, return and print |
| **POS Billing** | Prepare and hold sales for a cashier |
| **System Manager** | Everything above, plus POS settings, brand and form layouts |

## Contributing

Contributions are welcome! 🙌

1. Fork the repository and create a branch from `develop`.
2. Install the app on a local bench (see [Installation](#installation)).
3. Set up the checks once with `pre-commit install`. They run ruff for Python and prettier and eslint for the frontend on every commit.
4. Make your change and run the tests:

   ```bash
   bench --site yoursite.localhost run-tests --app ant_pos
   ```

5. Open a pull request against `develop` with a short description of the change.

Found a bug or have an idea? [Open an issue](https://github.com/anthertech/antPOS/issues).

## Support

- 🐞 **Issues:** [github.com/anthertech/antPOS/issues](https://github.com/anthertech/antPOS/issues)
- ✉️ **Email:** [support@anthertech.com](mailto:support@anthertech.com)

## Built with

[Frappe Framework](https://frappe.io/framework) · [ERPNext](https://frappe.io/erpnext) · [Frappe UI](https://ui.frappe.io) · [Vue 3](https://vuejs.org)

## License

antPOS is released under the [MIT License](license.txt).

<div align="center">
<br />
<sub>Made with ❤️ by <b>Anther Technologies Pvt Ltd</b></sub>
</div>
