export default function SectionTitle({ title, color }) {
  return (
    <>
      <h2 className={`sm:mb-10 mb-8 text-center ${color}`}>{title}</h2>
    </>
  );
}
