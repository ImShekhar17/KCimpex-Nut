export default function FeedbackButton() {
  return (
    <button
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 bg-yellow-400 text-gray-900 px-3 py-8 font-bold text-sm tracking-wider shadow-lg hover:bg-yellow-500 transition-colors"
      style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
    >
      ★ Feedback
    </button>
  );
}
