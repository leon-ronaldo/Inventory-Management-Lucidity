import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  title: string;
  value: string | number;
}

export default function StatsCard({ icon: Icon, title, value }: StatsCardProps) {
  return (
    <div className="bg-primary-olive backdrop-blur-sm rounded-lg p-6">
      <div className="flex items-start gap-4">
        <Icon className="w-6 h-6 text-white" />
        <div>
          <p className="text-gray-400 text-sm font-medium">{title}</p>
          <p className="text-white text-3xl font-bold mt-1">{value}</p>
        </div>
      </div>
    </div>
  );
}
