const Agrees = ({ post_id, fetchPosts }) => {
  const token = window.localStorage.getItem('token');

  const addAgree = () => {
    let response1 = fetch('/posts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ _id: post_id }),
    }).then((responseJSON) => {
      if (responseJSON.status !== 204) {
        console.log(responseJSON);
        console.log('There has been an error on the patch request');
      } else {
        fetchPosts();
      }
    });
  };

  return (
    <button
      onClick={addAgree}
      className="agree-button"
      type="submit"
      value="Agree"
    >
      Agree
    </button>
  );
};

export default Agrees;
