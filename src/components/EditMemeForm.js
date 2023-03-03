import { useState, useEffect } from "react";
import { useNavigation } from "react-router-dom";
import axios from "axios";

const EditMemeForm = ({ match }) => {
  const [meme, setMeme] = useState({ caption: "", url: "" });
  const history = useNavigation();

  useEffect(() => {
    const fetchMeme = async () => {
      const { data } = await axios.get(`/api/memes/${match.params.id}`);
      setMeme(data);
    };
    fetchMeme();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`/api/memes/${match.params.id}`, meme);
    history.push("/");
  };

  const handleChange = (e) => {
    setMeme({ ...meme, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="caption">Caption:</label>
        <input
          type="text"
          name="caption"
          value={meme.caption}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="url">Image URL:</label>
        <input
          type="text"
          name="url"
          value={meme.url}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default EditMemeForm;
