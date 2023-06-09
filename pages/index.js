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
    description: "Lorem ipsum",
  },
];

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  return {
    props: { meetups: DUMMY_MEETUPS },
    revalidate: 10,
  };
}

export default HomePage;
