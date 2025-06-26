import { getDictionary, LangProps, LangPropsSimple } from "@/lib/dictionaries";
import { CheckCircle } from "lucide-react";

// title: "Email Verification",

export async function generateMetadata({ params }: LangProps) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  return {
    title: dict.openlink.email_verification.title,
  };
}

export default async function EmailVerificationSuccess({
  params,
  searchParams,
}: {
  params: LangPropsSimple;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const { userid } = await searchParams;

  return (
    <div className="flex sm:min-h-[80vh] min-h-[85vh] w-full flex-col items-center justify-center text-center bg-transparent">
      <div className="max-w-md w-full rounded-xl shadow-lg overflow-hidden p-8 text-center bg-gradient-to-br from-indigo-50 to-teal-200 dark:from-indigo-300 dark:via-purple-300 dark:to-pink-300">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-6">
          <CheckCircle className="h-10 w-10 text-blue-500" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-3">
          {userid} {dict.openlink.email_verification.success_main}
        </h1>
        <p className="text-gray-600 mb-6">
          {dict.openlink.email_verification.success_sub}
        </p>
        {/* <button
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
          onClick={() => window.location.href = '/login'}
        >
          立即登录
        </button> */}
        {/* <p>{dict.openlink.email_verification.has_question}</p>
        <Link href="/help" className="text-indigo-600 hover:underline">
          {dict.openlink.email_verification.contact}
        </Link> */}
      </div>
    </div>
  );
}
