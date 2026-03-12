import MemberCard from "../Component/MemberCard";

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">
        Student Experience Dashboard
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <MemberCard
          name="Member One"
          link="/member1"
        />

        <MemberCard
          name="Member Two"
          link="/member2"
        />

        <MemberCard
          name="Member Three"
          link="/member3"
        />

      </div>
    </div>
  );
}

export default Home;