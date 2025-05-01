# 💼 Ant-POS

**Ant-POS** is a modern, efficient, and flexible Point of Sale (POS) system built on **Frappe** and **ERPNext**. Designed to work seamlessly across all Frappe versions, it leverages Frappe's built-in APIs and validation mechanisms to ensure smooth performance, accurate error handling, and a superior user experience.

---

## 🚀 Features

- ✅ **Supports All Frappe Versions**  
  Developed to be compatible with all Frappe and ERPNext versions.

- 🧩 **Built with Frappe UI**  
  Uses vanilla Frappe UI components for a seamless and efficient interface.

- 🧾 **Direct Sales Invoice Creation**  
  Creates standard **Sales Invoices** instead of POS Invoices, avoiding dependency on POS Closing.

- ⚙️ **Dynamic Field Configuration**  
  Configure fields dynamically and display them directly in the POS interface.

- 🔌 **Frappe API Integration**  
  Utilizes built-in Frappe APIs for real-time updates, validation, and error handling.

- 📱 **Mobile Compatibility (Upcoming)**  
  Future updates will include **Ionic integration** for a mobile-friendly experience.

---

## 🛠️ Installation

Follow these steps to install Ant-POS on your ERPNext setup:

```bash
# Step 1: Navigate to your Frappe bench directory
cd ~/frappe-bench
```

```bash
# Step 2: Clone the Ant-POS app from GitHub
bench get-app ant_pos https://github.com/anthertech/antPOS.git
```

```bash
# Step 3: Install the Ant-POS app on your site (replace 'yoursite.com' with your actual site name)
bench --site yoursite.com install-app ant_pos
```

```bash
# Step 4: Build site assets (recommended after installing a new app)
bench --site yoursite.com build
```

---

## 📦 Usage

1. Open the **POS module** from your ERPNext dashboard.  
2. Configure your POS settings and dynamic fields as needed.  
3. Start creating **Sales Invoices** instantly — no need for POS Closing.  
4. Keep your app updated to enjoy the latest features and fixes.

---

## 🔮 Future Enhancements

- 📱 **Mobile-Friendly Interface**  
  Integration with **Ionic** to deliver a sleek mobile experience.

- 🛠 **Advanced Customization**  
  More settings for deeper customization of the POS workflow.

- ⚡ **Performance Improvements**  
  Optimized database queries and background processes for faster checkouts.

---

## 🤝 Contributions

We welcome contributions from the community!  
Feel free to:

- Submit issues  
- Open pull requests  
- Suggest improvements

👉 [Contribute on GitHub](https://github.com/anthertech/antPOS)

---

## 📄 License

Ant-POS is released under the **MIT License** — free for personal and commercial use.

---

## 📬 Contact & Support

Have questions or need help? Visit our [GitHub repository](https://github.com/anthertech/antPOS) or [contact us](mailto:support@anthertech.com).

---

> 💡 *Ant-POS — built to simplify sales, powered by Frappe.*
