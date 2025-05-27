import { Play } from "lucide-react";

export default function PitchVideo() {
  return (
    <div className="bg-gray-700 rounded-lg overflow-hidden">
      <a
        href="https://youtu.be/qbgw0QfjzIQ"
        target="_blank"
        rel="noopener noreferrer"
        className="block aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center cursor-pointer"
      >
        <div className="text-center text-white">
          <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
          <p className="text-lg font-semibold">My Elevator Pitch Video</p>
          <p className="text-sm opacity-80">Click to watch on YouTube</p>
        </div>
      </a>
    </div>
  );
}
