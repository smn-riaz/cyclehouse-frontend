import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto p-6 ">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Contact Us
      </h2>

      <div className="grid md:grid-cols-2 gap-6">

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