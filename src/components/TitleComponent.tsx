interface TitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: TitleComponentProps) {
  return (
    <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 drop-shadow-sm">
      {title}
    </h1>
  );
}
