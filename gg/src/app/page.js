export default function Home() {
  const fetchData = async () => {
    const response = await fetch("http://localhost:6969/users");
    const data = await response.json();
    console.log(data);
  };

  fetchData();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Hello world
    </div>
  );
}
