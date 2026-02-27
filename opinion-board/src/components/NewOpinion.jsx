import { useActionState } from "react";
import {
  OpinionsContext,
  OpinionsContextProvider,
} from "../store/opinions-context";
import { use } from "react";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function handleSubimtAction(prevState, formData) {
    const userName = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");
    let errors = [];
    if (title.trim().length < 5) {
      errors.push("title must be at least five charcacter");
    }
    if (body.trim().length < 10 || body.trim().length > 300) {
      errors.push("body must be in range of 10 to 300 character");
    }
    if (!userName.trim()) {
      errors.push("Please provide your name");
    }

    if (errors.length > 0) {
      return {
        errors,
        entredValues: {
          title,
          body,
          userName,
        },
      };
    }
    await addOpinion({ title, body, userName });

    return { errors: null };
  }

  const [formState, formAction] = useActionState(handleSubimtAction, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input
              type="text"
              id="userName"
              name="userName"
              defaultValue={formState.entredValues?.userName}
            />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              defaultValue={formState.entredValues?.title}
            />
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea
            id="body"
            name="body"
            rows={5}
            defaultValue={formState.entredValues?.body}
          ></textarea>
        </p>

        {formState.errors && (
          <ul className="errors">
            {formState.errors.map((error) => {
              return <li key={error}>{error}</li>;
            })}
          </ul>
        )}
        <Submit />
      </form>
    </div>
  );
}
