import Entry from "./components/Entry";
import emojipedia from './emojipedia';

console.log(emojipedia);
function createEntry(emojiTerm) {
	return(
		<Entry
			key={emojiTerm.id}
			emoji={emojiTerm.emoji}
			aria={emojiTerm.name}
			emojiName={emojiTerm.name}
			emojiDescription={emojiTerm.meaning}
		/>
	)
}

function App() {
	return (<div>
		<h1>
			<span>emojipedia</span>
		</h1>
		<dl className="dictionary">{emojipedia.map(createEntry)}</dl>
	</div>)
}

export default App;