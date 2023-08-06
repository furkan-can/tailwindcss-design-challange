import ContentRow from "../../components/ContentRow/ContentRow";
import IconComponent from "../../components/IconsComponent/IconComponent ";

const RectangleSection = () => {
  const contentItems = [
    {
      assets: {
        icon: <IconComponent iconType={"icon-trophy"} fill={"border-amber-900 text-transparent absolute top[0] left[0]"} width={64} height={64}></IconComponent>,
        rectangle: <IconComponent iconType={"rectangle25"} fill={"text-blue-500 absolute mb-5 ml-14 top[0] left[0]"} width={60} height={60}></IconComponent>
      },
      title: "Nibh viverra",
      paragraph: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      assets: {
        icon: <IconComponent iconType={"icon-tunnel"} fill={"text-amber-900 text-transparent absolute top[0] left[0]"} width={64} height={64}></IconComponent>,
        rectangle: <IconComponent iconType={"rectangle26"} fill={"text-green-600 absolute mb-10 ml-10 top[0] left[0]"} width={53} height={53}></IconComponent>
      },
      title: "Cursus amet",
      paragraph: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    },
    {
      assets: {
        icon: <IconComponent iconType={"icon-tv"} fill={"text-amber-900 text-transparent absolute top[0] left[0]"} width={64} height={64}></IconComponent>,
        rectangle: <IconComponent iconType={"rectangle27"} fill={"text-fuchsia-700 absolute mb-3 ml-16 top[0] left[0]"} width={45} height={45}></IconComponent>
      },
      title: "Ipsum fermentum",
      paragraph: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa.",
    }
  ];

  return (
    <div className="w-[1440px] h-[350px] py-7 flex-col justify-end items-center inline-flex iphone:h-full iphone:w-full iphone:justify-center">
      <ContentRow items={contentItems} />
    </div>
  );
}

export default RectangleSection;