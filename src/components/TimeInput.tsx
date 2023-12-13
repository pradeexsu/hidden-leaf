type TimeInputProps = {
  setStartTime: (startTime: string) => void;
  setEndTime: (endTime: string) => void;
};

export default function TimeInput({
  setStartTime,
  setEndTime,
}: TimeInputProps) {
  return (
    <>
      <div className="flex justify-around ">
        <label className="text-gray-700 " htmlFor="time">
          <input
            type="time"
            className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            onChange={(e) => setStartTime(e.target.value)}
          />
        </label>

        <label className="text-gray-700 " htmlFor="time">
          <input
            type="time"
            className="flex-1 w-full px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            onChange={(e) => setEndTime(e.target.value)}
          />
        </label>
      </div>
    </>
  );
}
