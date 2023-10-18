import { useState, useEffect } from "react"
import BlogsList from "./BlogsList"

const Home = () => {
    const [blogs, setBlogs] = useState([
            {"id": 1, "title": "Exploring the Wonders of the Grand Canyon", "body": "The Grand Canyon is a geological marvel that never ceases to amaze. Its vast, breathtaking landscapes draw visitors from all over the world.", "author": "John Smith"},
            {"id": 2, "title": "The Art of Baking Perfect Sourdough Bread", "body": "Baking sourdough bread is a delightful blend of science and art. Discover the secrets to creating that perfect, crusty loaf.", "author": "Sarah Baker"},
            {"id": 3, "title": "A Guide to Sustainable Gardening Practices", "body": "Incorporating sustainable gardening practices can make your garden flourish while minimizing your environmental impact. Learn how to get started.", "author": "Lisa Green"},
            {"id": 4, "title": "Space Exploration: The Next Frontier", "body": "The exploration of space holds the key to the future of humanity. Join us as we delve into the latest discoveries and future missions.", "author": "Michael Spacewalker"},
            {"id": 5, "title": "Culinary Adventures in Tuscany", "body": "Tuscany is a food lover's paradise. From delectable pastas to fine wines, we take you on a culinary journey through this Italian gem.", "author": "Maria Rossi"},
            {"id": 6, "title": "The Art of Mindfulness: Finding Inner Peace", "body": "Discover the transformative power of mindfulness and how it can help you find inner peace in our fast-paced world.", "author": "Zen Master"},
            {"id": 7, "title": "Hiking the Inca Trail: A Journey to Machu Picchu", "body": "Embark on an unforgettable adventure through the Inca Trail to reach the ancient wonder of Machu Picchu. Learn about the trail's history and significance.", "author": "David Explorer"},
            {"id": 8, "title": "Unraveling the Mysteries of Ancient Egypt", "body": "Step into the past as we delve into the rich history of ancient Egypt, exploring its pharaohs, pyramids, and enigmatic hieroglyphs.", "author": "Emily Egyptologist"},
            {"id": 9, "title": "The Power of Renewable Energy Sources", "body": "Renewable energy is changing the way we power our world. Discover the various sources and their environmental benefits.", "author": "Andrew GreenTech"},
            {"id": 10, "title": "The World of Underwater Photography", "body": "Dive into the mesmerizing world of underwater photography and capture the beauty of marine life through the lens of a camera.", "author": "Jessica Photographer"}
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

useEffect(() => {
    console.log("Use Effect Run");
});


  return (
    <div>
        <BlogsList blogs={blogs} title = "Recent Blogs" handleDelete={handleDelete}/>
        
    
    </div>
  )
}

export default Home
