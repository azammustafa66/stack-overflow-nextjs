export default function AskQuestion() {
  return (
    <div>
      <h1>Ask Question</h1>
      <form>
        <input type='text' placeholder='Title' />
        <textarea placeholder='Description' />
        <button type='submit'>Ask Question</button>
      </form>
    </div>
  );
}
