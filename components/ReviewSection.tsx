"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ReviewSection() {
  const [name, setName] = useState("");
  const [review, setReview] = useState("");
  const [submittedReviews, setSubmittedReviews] = useState<
    { name: string; review: string }[]
  >([]);

  const handleSubmit = () => {
    if (name.trim() && review.trim()) {
      setSubmittedReviews([...submittedReviews, { name, review }]);
      setName("");
      setReview("");
    }
  };

  return (
    <section className="py-16 bg-muted/20" id="reviews">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Leave a Review
        </motion.h2>

        <motion.div
          className="max-w-xl mx-auto bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Input
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mb-4"
          />
          <Textarea
            placeholder="Write your review..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            rows={4}
            className="mb-4"
          />
          <Button onClick={handleSubmit} disabled={!name || !review}>
            Submit Review
          </Button>
        </motion.div>

        {submittedReviews.length > 0 && (
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            {submittedReviews.map((r, index) => (
              <div
                key={index}
                className="bg-white dark:bg-zinc-800 p-4 rounded-lg shadow border border-border"
              >
                <p className="text-muted-foreground italic mb-2">"{r.review}"</p>
                <p className="text-sm font-semibold text-right">— {r.name}</p>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
