import { SparklesIcon } from "@heroicons/react/outline";
import TweetInput from "./TweetInput";
import Post from "./Post";

const Feed = () => {
  const posts = [
    {
      id: "1",
      name: "ZAngar",
      username: "Zanggar",
      userImage: "images/zangar.png",

      text: "I'm baby literally heirloom vape, ennui tote bag keffiyeh hella shaman hoodie tousled hammock tbh bushwick cloud bread actually. ",
      timestamp: "2 hours ago",
    },
    {
      id: "2",
      name: "Zanggar",
      username: "Zsanggar",
      userImage: "images/zangar.png",
  
      text: "Blog heirloom iPhone activated charcoal man braid butcher, YOLO palo santo. ",
      timestamp: "8 hours ago",
    }
  ];
  return (
    <div className="xl:ml-[260px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50  bg-white justify-between items-center border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <TweetInput />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};
export default Feed;
