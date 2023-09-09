import PostCard, { PostCardInfo } from "./components/post-card";

export default function Home() {
  const datas: PostCardInfo[] = [
    {
      title: "test1",
      date: "2023-09-09",
      description:
        "이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.이것은 테스트용 입니다. 감사합니다.",
    },
    {
      title: "test2",
      date: "2023-09-09",
      description: "이것은 테스트용 입니다. 감사합니다",
    },
  ];
  return (
    <div className=" py-10 px-5 grid grid-cols-1 gap-4">
      {datas.map((data, index) => {
        return (
          <PostCard
            key={index}
            title={data.title}
            date={data.date}
            description={data.description}
          />
        );
      })}
    </div>
  );
}
