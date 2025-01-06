import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Home() {
  return (
    <section className="min-h-[calc(100vh-16rem)] flex flex-col-reverse md:flex-row items-center justify-center gap-8 p-4">
      {/* Left Section: Course Information */}
      <div className="w-full md:w-1/2  shadow-md rounded-lg p-6 mb-6 md:mb-0">
        <h1 className="text-2xl font-bold text-green-700 mb-4">
          ছয় সপ্তাহের বেসিক ইংরেজি কোর্স
        </h1>
        <h2 className="text-lg font-medium text-default-500 mb-4">
          এই কোর্সটি সম্পন্ন করার পরে আপনি যা ভাবেন বাংলায়, তা ইংরেজিতে অনুবাদ
          করতে পারবেন ইন শা আল্লাহ।
        </h2>
        <ul className="text-default-700 text-lg space-y-2">
          <li>
            <strong>মোট ক্লাস:</strong> ৩০টি
          </li>
          <li>
            <strong>কোর্সের সময়কাল:</strong> ৬ সপ্তাহ (১.৫ মাস)
          </li>
          <li>
            <strong>সাপ্তাহিক ক্লাস:</strong> ৫টি
          </li>
          <li>
            <strong>সাপ্তাহিক কুইজ:</strong> ৫টি
          </li>
          <li>
            <strong>সাপ্তাহিক পরীক্ষা:</strong> ১টি
          </li>
          <li>
            <strong>কোর্স শেষে ফাইনাল পরীক্ষা:</strong> ১টি থাকবে
          </li>
        </ul>
        <p className="text-default-800 mt-4">
          <strong>যোগাযোগ করুন:</strong> 01612098484 (WhatsApp)
        </p>
        <Button
          className="mt-6"
          color="success"
          as={Link}
          href="https://forms.gle/45UwCsVVy4rZ35cJ8"
          target="_blank"
        >
          ভর্তি ফর্ম
        </Button>
      </div>

      {/* Right Section: YouTube Video */}
      <div className="w-full md:w-1/2 flex items-center justify-center ">
        <iframe
          className="w-full h-64 md:h-80 rounded-lg shadow-md"
          src="https://www.youtube.com/embed/tK5OrWG-pjQ?start=406"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}
