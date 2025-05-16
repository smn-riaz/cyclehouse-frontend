"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import blog1 from '../../assets/blog1.jpg'
import blog2 from '../../assets/blog2.jpg'
import blog3 from '../../assets/blog3.jpg'
import { BlogPost } from "@/types/Blog";
import { Link } from "react-router-dom";



const blogs: BlogPost[] = [
  {
    id: 1,
    title: "Top 5 E-Bikes for Urban Commuters",
    description: "Discover the best e-bikes to tackle city streets with comfort, speed, and style.",
    image: blog1,
    link:'https://www.adventurecycling.org/blog/buffalo-bicycles-profile/'
  },
  {
    id: 2,
    title: "How to Maintain Your E-Bike Like a Pro",
    description: "A complete guide to keeping your e-bike in perfect shape — no mechanic needed.",
    image: blog2,
    link:"https://www.adventurecycling.org/blog/buffalo-bicycles-profile/"
  },
  {
    id: 3,
    title: "Why E-Bikes are the Future of Sustainable Transport",
    description: "Explore how e-bikes are transforming city mobility while reducing carbon footprint.",
    image: blog3,
    link:"https://www.adventurecycling.org/blog/buffalo-bicycles-profile/"
  },
];

const Blog = () => {
  return (
 <section className="lg:py-16  px-6 py-6 xl:max-w-[1300px] xl:mx-auto">
  <div className="lg:px-16">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {blogs.map((post, idx) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
        >
          <Card className="overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all h-full flex flex-col">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-52 sm:h-60 object-cover"
            />
            <CardContent className="p-6 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-left">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base text-left">
                  {post.description}
                </p>
              </div>
              <div className="mt-4 text-left">
                <Button variant="link" className="text-green-600 px-0">
                  <Link to={post.link}>Read More →</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </div>
</section>

  );
};

export default Blog;
