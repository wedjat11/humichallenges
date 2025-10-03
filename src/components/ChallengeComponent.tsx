import { Input } from "./input";

export default function ChallengeComponent() {
  return (
    <section>
      <h1>Create a new challenge</h1>
      <div>
        <Input placeholder="Challenge name" />
        <Input placeholder="Challenge description" />
      </div>
    </section>
  );
}
