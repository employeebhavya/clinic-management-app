"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingLIst from "./_components/BookingLIst";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import GlobalApi from "@/app/_utils/GlobalApi";

function MyBooking() {
  const { user } = useKindeBrowserClient();
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    user && getBookingData();
  }, [user]);

  const getBookingData = () => {
    GlobalApi.getUserBooking(user?.email).then((res) => {
      setBookingData(res.data.data);
    });
  };

  const filterUserBooking = (type) => {
    return bookingData.filter((item) =>
      type === "upcoming"
        ? new Date(item.Date) >= new Date()
        : new Date(item.Date) < new Date()
    );
  };

  return (
    <Container className={"py-10 flex flex-col gap-5"}>
      <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
        My Bookings
      </h2>
      <Tabs defaultValue="upcoming" className="w-full justify-start">
        <TabsList className="w-full justify-start">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <BookingLIst
            expired={false}
            bookingList={filterUserBooking("upcoming")}
            updtaeRecord={() => getBookingData()}
          />
        </TabsContent>
        <TabsContent value="expired">
          <BookingLIst
            expired={true}
            bookingList={filterUserBooking("expired")}
            updtaeRecord={() => getBookingData()}
          />
        </TabsContent>
      </Tabs>
    </Container>
  );
}

export default MyBooking;
