import HomeLayout from "@/components/Layouts/layout";
import Start from "@/components/Start/Start";

export default function Home() {
  return <Start />;
}

Home.getLayout = function getLayout(page) {
  return (
    <HomeLayout showFooter={false} pageTitle={"Eqam capital | Home"}>
      {page}
    </HomeLayout>
  );
};
