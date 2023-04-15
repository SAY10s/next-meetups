import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
import { useEffect, useState } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "random meetup",
    image:
      "https://www.ashleyabroad.com/wp-content/uploads/2019/10/Marienplatz-Munich-Germany-1.jpg",
    address: "Gołkowice 44-341",
    description: "Lorem ip",
  },
  {
    id: "m2",
    title: "random meetup2",
    image:
      "https://www.ashleyabroad.com/wp-content/uploads/2019/10/Marienplatz-Munich-Germany-1.jpg",
    address: "Skrbeńsko 44-341",
    description: "Lorem ip",
  },
];

const HomePage = () => {
  const [loadedMeetups, setLoadedMeetups] = useState();
  useEffect(() => {
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={loadedMeetups} />;
};

export default HomePage;
