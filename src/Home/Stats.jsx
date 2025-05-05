import React, { useEffect, useRef, useState } from "react";
import "./Stats.css";

const stats = [
  {
    title: "99.5%",
    subtitle: "First Time Approval",
    description: "Remove the back and forth to reach the perfect result.",
    finalValue: 99.5,
  },
  {
    title: "99.7%",
    subtitle: "On-Time Delivery",
    description: "We hate being late as much as you do.",
    finalValue: 99.7,
  },
  {
    title: "12 hr",
    subtitle: "Turnaround Time",
    description: "Our customers receive images in as little as 12 hours.",
    isHour: true,
  },
  {
    title: "$0.10",
    subtitle: "Pricing Starts At",
    description:
      "Image editing from $0.10 per image — affordable and scalable.",
    isPrice: true,
    startPrice: 1.0,
    endPrice: 0.1,
  },
];

const AnimatedStat = ({ stat }) => {
  const [value, setValue] = useState(stat.isPrice ? stat.startPrice : 0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated || stat.isHour) return;

    let current = stat.isPrice ? stat.startPrice : 0;
    const interval = setInterval(() => {
      if (stat.isPrice) {
        current -= 0.009;
        if (current <= stat.endPrice) {
          setValue(stat.endPrice.toFixed(2));
          clearInterval(interval);
        } else {
          setValue(current.toFixed(2));
        }
      } else {
        current += 0.9;
        if (current >= stat.finalValue) {
          setValue(stat.finalValue.toFixed(1));
          clearInterval(interval);
        } else {
          setValue(current.toFixed(1));
        }
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasAnimated, stat]);

  return (
    <div ref={ref} className="stat-card">
      <h2 className="stat-value">
        {stat.isHour
          ? stat.title
          : stat.isPrice
          ? `$${value}`
          : `${value}%`}
      </h2>
      <p className="stat-subtitle">{stat.subtitle}</p>
      <p className="stat-desc">{stat.description}</p>
    </div>
  );
};

const Stats = () => {
  return (
    <div className="stats-container">
      <div className="stats-left">
        <h1>
          Bulk quantity of
          <br />
          Images Processed
          <br />
          <span className="highlight-green">Daily</span>
        </h1>
        <p className="stats-desc">
          With our highly experienced professionals, scaling to meet your photo
          processing needs is easy.
        </p>
        <div className="green-arrow"></div>
      </div>
      <div className="stats-right">
        {stats.map((stat, index) => (
          <AnimatedStat key={index} stat={stat} />
        ))}
      </div>
    </div>
  );
};

export default Stats;
