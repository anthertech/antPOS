Ant-POS

Ant-POS is a modern, efficient, and flexible Point of Sale (POS) system built on Frappe and ERPNext. Designed to work seamlessly across all Frappe versions, it leverages Frappe's built-in APIs and validation mechanisms to ensure smooth performance, accurate error handling, and a superior user experience.

Features

Supports All Frappe Versions: Developed to be compatible with all versions of Frappe and ERPNext.

Built with Frappe UI: Uses vanilla Frappe UI components for a seamless and efficient interface.

Direct Sales Invoice Creation: Allows users to create a straight Sales Invoice instead of a POS Invoice, preventing stock and sales from being dependent on POS Closing.

Dynamic Field Configuration: Users can configure fields dynamically within the document and view them in the POS interface.

Frappe API Integration: Utilizes Frappe’s inbuilt APIs for real-time updates, validation, and error handling.

Mobile Compatibility (Upcoming): Future updates will include Ionic integration for a more mobile-friendly experience.

Installation

To install Ant-POS on your ERPNext setup, follow these steps:

# Navigate to your Frappe bench directory
cd ~/frappe-bench

# Get the Ant-POS app
bench get-app ant_pos https://github.com/anthertech/antPOS.git

# Install the app on your site
bench --site yoursite.com install-app ant_pos

Usage

Open the POS module in your ERPNext dashboard.

Configure your settings and dynamic fields as needed.

Start making Sales Invoices without relying on POS Closing.

Stay updated with the latest features as we enhance the system.

Future Enhancements

Mobile-Friendly Interface: Adding Ionic framework for better usability on mobile devices.

Advanced Customization: More flexible settings to customize the POS experience.

Performance Improvements: Optimized queries and background processing for a faster checkout process.

Contributions

We welcome contributions! Feel free to submit issues or pull requests via our GitHub repository.

License

Ant-POS is released under the MIT License.

For more details, visit our official repository or contact us for support!
