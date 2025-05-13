"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  CircularProgressbar,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function DashboardSection() {
  const stats = [
    {
      title: "Heart Rate Variability (HRV)",
      value: 75,
      unit: "ms",
      extra: "Normal",
      description:
        "Measures the variation in time between each heartbeat, reflecting your overall health and fitness.",
      icon: "❤️",
      goal: 100,
    },
    {
      title: "Skin Temperature",
      value: 37.2,
      unit: "°C",
      extra: "+0.5°C above normal",
      description:
        "Measures skin temperature to assess potential changes in body temperature.",
      icon: "🌡️",
      goal: 40,
    },
    {
      title: "Respiratory Rate",
      value: 16,
      unit: "BrPM",
      extra: "Average: 15",
      description:
        "Tracks the number of breaths per minute. Ideal range: 12-16.",
      icon: "🌬️",
      goal: 20,
    },
    {
      title: "Activity / Strain Score",
      value: 15,
      unit: "0-21 scale",
      extra: "Strain: High",
      description:
        "Shows your activity level based on your intensity and exertion.",
      icon: "💪",
      goal: 21,
    },
    {
      title: "Calories Burned",
      value: 1500,
      unit: "kcal",
      extra: "1,500 / 2,000 kcal",
      description:
        "Displays how many calories you’ve burned based on your activity.",
      icon: "🔥",
      goal: 2000,
    },
    {
      title: "Step Count / Distance",
      value: 8500,
      unit: "Steps",
      extra: "Goal: 10,000 steps",
      description: "Tracks how many steps you've taken today.",
      icon: "👟",
      goal: 10000,
    },
    {
      title: "Stress or Mood Score",
      value: 5,
      unit: "1-10",
      extra: "Mood: Relaxed",
      description: "Tracks your stress level or mood on a scale from 1 to 10.",
      icon: "😊",
      goal: 10,
    },
  ];

  return (
    <section className="w-full py-10 bg-[#2f0d00] text-[#d19e74]">
      <div className="container px-4 md:px-36">
        <h2 className="text-3xl font-bold mb-8 text-[#d19e74]">
          Dashboard (Examples for Health Stats)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {stats.map((stat, idx) => {
            const percentage = stat.goal ? (stat.value / stat.goal) * 100 : 0;

            return (
              <Card
                key={idx}
                className="aspect-square bg-[#7a3c1e] border border-[#9c6544] transition-all duration-500 hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 flex flex-col justify-between items-center h-full gap-6">
                  <h3 className="text-lg font-semibold text-[#d19e74] flex items-center gap-2">
                    {stat.icon && <span className="text-xl">{stat.icon}</span>}
                    {stat.title}
                  </h3>

                  <div className="w-24 h-24">
                    <CircularProgressbar
                      value={percentage}
                      text={`${new Intl.NumberFormat().format(stat.value)}`}
                      styles={buildStyles({
                        textColor: "#d19e74",
                        pathColor: "#9c6544",
                        trailColor: "#2f0d00",
                      })}
                    />
                  </div>

                  <p className="text-sm text-[#d19e74] text-center">
                    {stat.description}
                  </p>

                  <div className="text-sm text-[#9c6544] text-center space-y-1">
                    {stat.extra && <p>{stat.extra}</p>}
                    {stat.unit && <p>{stat.unit}</p>}
                  </div>

                  {/* Gradient-filled progress bar */}
                  <div className="w-full mt-4">
                    <div className="flex justify-between text-[#d19e74] text-sm">
                      <span>{stat.extra}</span>
                      <span>{`${Math.round(percentage)}%`}</span>
                    </div>
                    <div className="w-full bg-[#2f0d00] h-2 mt-2 rounded">
                      <div
                        className="bg-gradient-to-r from-[#9c6544] to-[#7a3c1e] h-full rounded"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
