import { PDFViewer, Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useLocation } from "react-router-dom";

// Define styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
    fontFamily: "Helvetica",
  },
  header: {
    textAlign: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 4,
  },
  contact: {
    fontSize: 10,
    marginBottom: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionHeader: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  grid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  gridItem: {
    flex: 1,
    alignItems: "flex-start", // Align content to the left
  },
  infoRow: {
    marginBottom: 4,
    flexDirection: "row",
    alignItems: "flex-start", // Align rows to the top
    justifyContent: "flex-start", // Align labels and values to the left
  },
  infoLabel: {
    fontWeight: "bold",
    marginRight: 5, // Add spacing between label and value
  },
  table: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableCellHeader: {
    padding: 5,
    flex: 1,
    backgroundColor: "#f0f0f0",
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  tableCell: {
    padding: 5,
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  footer: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 10,
  },
});

const CheckoutSummaryPDF = ({ checkoutsummary, guest }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Circuit House, Jashore</Text>
        <Text style={styles.subtitle}>Room Checkout Invoice</Text>
        <Text style={styles.contact}>Jashore, Khulna, Bangladesh</Text>
        <Text style={styles.contact}>Phone: 02477762486 | Email: chjashore@gmail.com</Text>
      </View>

      {/* Guest Details and Payment Info in Grid */}
      <View style={[styles.section, styles.grid]}>
        {/* Guest Details */}
        <View style={styles.gridItem}>
          <Text style={styles.sectionHeader}>Guest Details</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Guest Name:</Text>
            <Text>{guest.name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Room Name:</Text>
            <Text>{guest.room_name}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Check-In Date:</Text>
            <Text>
              {new Date(guest.check_in_date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Check-Out Date:</Text>
            <Text>
              {new Date(guest.check_out_date).toLocaleString("en-GB", {
                day: "2-digit",
                month: "2-digit",
                year: "numeric",
                hour: "numeric",
                minute: "numeric",
                hour12: true,
              })}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Total Persons:</Text>
            <Text>{guest.total_person}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Total Days:</Text>
            <Text>{guest.total_days}</Text>
          </View>
        </View>

        {/* Payment Information */}
        <View style={styles.gridItem}>
          <Text style={styles.sectionHeader}>Payment Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Payment Status:</Text>
            <Text>{checkoutsummary.payment_status}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Bill ID:</Text>
            <Text>{checkoutsummary.payment_id}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Bill By:</Text>
            <Text>{checkoutsummary.bill_by}</Text>
          </View>
        </View>
      </View>

      {/* Payment Details Table */}
      <View style={styles.section}>
        <Text style={styles.sectionHeader}>Payment Details</Text>
        <View style={styles.table}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCellHeader}>Description</Text>
            <Text style={styles.tableCellHeader}>Amount (BDT)</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Total Rental Price</Text>
            <Text style={styles.tableCell}>{checkoutsummary.total_rental_cost}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Total Food Price</Text>
            <Text style={styles.tableCell}>{checkoutsummary.total_food_cost}</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Total Other Costs</Text>
            <Text style={styles.tableCell}>{checkoutsummary.total_other_cost}</Text>
          </View>
          <View style={[styles.tableRow, { backgroundColor: "#f0f0f0" }]}>
            <Text style={styles.tableCell}>Grand Total</Text>
            <Text style={styles.tableCell}>{checkoutsummary.grand_total}</Text>
          </View>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text> you for staying at Jashore Circuit House.</Text>
        <Text>You are always welcome at Joyful Jashore.</Text>
        <Text>Thanks and regards,</Text>
        <Text>Nezarat Deputy Collector</Text>
        <Text>Cell: +8801733909222</Text>
      </View>
    </Page>
  </Document>
);

const CheckoutSummary = () => {
    const location = useLocation();
    const { checkoutsummary, guest } = location.state || {};

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-8">
      <PDFViewer style={{ width: "80%", height: "90vh" }}>
        <CheckoutSummaryPDF checkoutsummary={checkoutsummary} guest={guest} />
      </PDFViewer>
    </div>
  );
};

export default CheckoutSummary;
