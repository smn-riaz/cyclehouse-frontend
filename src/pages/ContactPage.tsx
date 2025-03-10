import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="flex justify-center items-center p-6">

      <div className="w-[450px] my-4">

        <div className="bg-gray-50 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Quick Message
          </h3>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Name
              </label>
              <Input type="text" placeholder="Hello World" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Email
              </label>
              <Input type="email" placeholder="helloworld@gmail.com" />
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Message
              </label>
              <Textarea placeholder="Write short message" />
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600">Send</Button>
          </form>
        </div>

      </div>
    </div>
  );
}