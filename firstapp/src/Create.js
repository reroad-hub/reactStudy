export default function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form onSubmit={(e) => {
                e.preventDefault();
                const title = e.target.title.value;
                const body = e.target.body.value;
                props.onCreate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title"></input></p>
                <p><textarea name="body" placeholder="body"></textarea></p>
                <p><input type="submit" value="Create"></input></p>
            </form>
        </article>
    );
}