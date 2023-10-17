import Posts from "@/components/post/Posts";
import CreatePost from "@/components/create-post";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default async function Home() {

  return (
    <div  className=" min-h-screen z-0">
      <CreatePost />
      <Posts />
    </div>
  );
}
