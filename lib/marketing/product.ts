// Public claims: keep these aligned with docs/product-roadmap.md and shipped routes.
export const product = {
  annualPrice: 300000,
  perpetualPrice: 1000000,
  source: "https://github.com/vinayraghavendran16/Northstar-School-OS",
  capabilities: [
    { title: "A clearer school day", category: "ATTENDANCE & PEOPLE", description: "Student, staff and guardian records. Class rosters. Present-by-default attendance that teachers can save and submit.", route: "/dashboard/attendance", icon: "01" },
    { title: "More room for teaching", category: "ACADEMICS", description: "Timetables, reusable class diaries, homework and keyboard-friendly marks entry. Everyday work, connected.", route: "/dashboard/teacher", icon: "02" },
    { title: "Know where fees stand", category: "FINANCE", description: "Create invoices, track balances and record offline payments. Give families visibility into what is due.", route: "/dashboard/finance", icon: "03" },
    { title: "Keep everyone in the loop", category: "COMMUNICATION", description: "Targeted announcements, acknowledgements and a notification inbox, with family access to published learning updates.", route: "/dashboard/communication", icon: "04" },
  ],
  planned: ["Payment gateway & automated reconciliation", "Offline attendance queues", "Report cards & school reports", "External email and SMS delivery"],
};
