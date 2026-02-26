"use client";

import { Container } from "@chakra-ui/react";
export default function Dashboard() {
  const calendar = new Calendar.setup({
    // You can customize the calendar options here
    // For example, you can set the initial date, language, etc.
  });
  return (
    <Container>
      <h1>My Calendar</h1>
      {/* <!-- The container for your dates[2]-- > */}
      <div id="calendar-grid"></div>
    </Container>
  );
}
