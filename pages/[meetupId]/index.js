import MeetupDetail from "@/components/meetups/MeetupDetail";
import { useRouter } from "next/router";

const MeetupDetails = () => {
  useRouter;

  return (
    <MeetupDetail
      image="https://www.ashleyabroad.com/wp-content/uploads/2019/10/Marienplatz-Munich-Germany-1.jpg"
      title="First meetup"
      address="Gołkowice"
      description="Lorem"
    />
  );
};

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  console.log(meetupId);
  //fetch for a single meetup
  return {
    props: {
      meetupData: {
        image:
          "https://www.ashleyabroad.com/wp-content/uploads/2019/10/Marienplatz-Munich-Germany-1.jpg",
        id: "m1",
        title: "spotkanie",
        address: "Gołkowice XD",
        description: "Opis miejsca",
      },
    },
  };
}

export default MeetupDetails;
