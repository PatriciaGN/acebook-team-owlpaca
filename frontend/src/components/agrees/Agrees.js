const Agrees = ({ post_id, fetchPosts }) => {
  const token = window.localStorage.getItem('token');

  const addAgree = () => {
    console.log('post id from Agrees: ', post_id);

    // event.preventDefault();
    let response1 = fetch('/posts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ _id: post_id }),
    })
      // .then((response) => console.log(response))
      // .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        if (responseJSON.status !== 204) {
          console.log('there has been an error on the patch request');
          console.log('response from agrees.js');
        } else {
          // let data = await response.json();
          // window.localStorage.setItem('token', data.token);
          fetchPosts();
        }
      });
  };

  //   console.log('response.statuts: ', response.status);
  //   console.log(response);

  //   if (response.status !== 204) {
  //     console.log('there has been an error on the patch request');
  //     console.log('response from agrees.js');
  //   } else {
  //     // let data = await response.json();
  //     // window.localStorage.setItem('token', data.token);
  //     fetchPosts();
  //   }
  // };

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
