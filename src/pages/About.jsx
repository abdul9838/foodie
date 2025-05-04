import React from "react";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-5 text-gray-700 font-sans">
      <h1 className="text-2xl font-semibold mb-6">About Us</h1>

      <p className="mb-4">
        Welcome to <strong>Foodie</strong> — a community built by food lovers
        for everyone who enjoys cooking and sharing meals. Whether you’re a
        seasoned cook or just starting out, our easy-to-follow recipes aim to
        bring joy to your kitchen.
      </p>

      <p className="mb-4">
        Our mission is to celebrate global flavors and inspire you to try
        something new. From healthy dishes to indulgent bites, we have something
        for everyone.
      </p>

      <p className="mb-6">
        We believe food connects people. Through shared experiences, tips, and
        simple techniques, our community makes cooking more accessible and fun.
      </p>

      <h2 className="text-xl font-medium mb-3">Our Values</h2>
      <ul className="list-disc list-inside space-y-1 mb-6">
        <li>
          <strong>Quality</strong> – We value fresh ingredients and thoughtful
          preparation.
        </li>
        <li>
          <strong>Diversity</strong> – We highlight recipes from all cultures.
        </li>
        <li>
          <strong>Creativity</strong> – We promote exploration and adaptation in
          cooking.
        </li>
        <li>
          <strong>Sustainability</strong> – We support eco-friendly food
          practices.
        </li>
      </ul>

      <h2 className="text-xl font-medium mb-3">Our Story</h2>
      <p className="mb-4">
        Foodie began as a small project by a few home cooks passionate about
        sharing recipes. It has grown into a vibrant space where chefs and
        beginners alike connect over their love for cooking.
      </p>
      <p className="mb-6">
        Our goal is to inspire you to cook with confidence, one delicious recipe
        at a time.
      </p>

      <h2 className="text-xl font-medium mb-3">Join Us</h2>
      <p>
        Be a part of the Foodie community. Share your creations, follow us for
        ideas, and subscribe for curated recipes sent to your inbox.
      </p>
    </div>
  );
}
