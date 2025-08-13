interface TitleComponentProps {
  title: string;
}

export default function TitleComponent({ title }: TitleComponentProps) {
  return <h1 className="text-2xl font-bold mb-4 text-center">{title}</h1>;
}
