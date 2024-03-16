import axios from "axios";

interface User{
  email: string;
  password: string;
  name: string;
  linkedin: string;
  github: string;
  phone: string;
  dob: string;
  year: string;
  degree: string;
  semester: string;
  skills: string[];
  interests: string[];
  }
  

const API = {
  BASE_URL: process.env.API_BASE_URL,
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/auth/login",
      SIGNUP: "/auth/signup",
    },
    BLOGS: {
      BASE: "/api",
      ALL: "/blogs/all",
      WITH_ID: (id: string) => `/blogs/${id}`,
      TRENDING: "/trending",
      TRENDING_WRITERS: "/trending/writers",
      BOOKMARKS: "/bookmarks/",
      LIKES: (id: string) => `/likes/${id}`,
      CURRENT_USER: "/user",
      USER: (id: string) => `/user/${id}`,
      FOLLOW: (id: string) => `/follow/${id}`,
      SEARCH: (query: string) => `/search?query=${query}`,
    },
  },
};

// export async function getSessionToken() {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get("");
//   const sessionToken = cookie?.value;
//   return sessionToken;
// }

export async function loginUser(body:{username:string, password:string}) {
  try {

      const response = await axios.post(
        API.BASE_URL + API.ENDPOINTS.AUTH.LOGIN, body,
       
      );
      return response.data;

  } catch (error) {
    console.log(error);
    return [];
  }
}

export default async function signupUser(body:User) {
  try {
    const response = await axios.post(
      API.BASE_URL + API.ENDPOINTS.AUTH.SIGNUP, body
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
}

// export async function getBlog(_id: string) {
//   const sessionToken = await getSessionToken();
//   try {
//     const response = await axios.get(
//       API.BASE_URL +
//         API.ENDPOINTS.BLOGS.BASE +
//         API.ENDPOINTS.BLOGS.WITH_ID(_id),
//       {
//         headers: {
//           "X-Session-ID": sessionToken,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return {};
//   }
// }

// export async function getTrending(count: number = 5) {
//   const sessionToken = await getSessionToken();
//   try {
//     const response = await axios.get(
//       API.BASE_URL +
//         API.ENDPOINTS.BLOGS.BASE +
//         API.ENDPOINTS.BLOGS.TRENDING +
//         `?count=${count}`,
//       {
//         headers: {
//           "X-Session-ID": sessionToken,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

// export async function getTrendingWriters() {
//   const sessionToken = await getSessionToken();
//   try {
//     const response = await axios.get(
//       API.BASE_URL +
//         API.ENDPOINTS.BLOGS.BASE +
//         API.ENDPOINTS.BLOGS.TRENDING_WRITERS,
//       {
//         headers: {
//           "X-Session-ID": sessionToken,
//         },
//       },
//     );
//     return response.data;
//   } catch (error) {
//     console.log(error);
//     return [];
//   }
// }

// export async function toggleBookmark(id: string) {
//   const sessionToken = await getSessionToken();
//   if (sessionToken !== undefined) {
//     try {
//       await axios.post(
//         API.BASE_URL +
//           API.ENDPOINTS.BLOGS.BASE +
//           API.ENDPOINTS.BLOGS.BOOKMARKS +
//           id,
//         null,
//         {
//           headers: {
//             "x-session-id": sessionToken,
//           },
//         },
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export async function toggleLike(id: string) {
//   const sessionToken = await getSessionToken();
//   if (sessionToken !== undefined) {
//     try {
//       await axios.post(
//         API.BASE_URL + API.ENDPOINTS.BLOGS.BASE + API.ENDPOINTS.BLOGS.LIKES(id),
//         null,
//         {
//           headers: {
//             "x-session-id": sessionToken,
//           },
//         },
//       );
//     } catch (error) {
//       console.log(error);
//     }
//   }
// }

// export async function toggleFollow(id: string): Promise<boolean> {
//   const sessionToken = await getSessionToken();
//   if (sessionToken !== undefined) {
//     try {
//       const result = await axios.put(
//         API.BASE_URL +
//           API.ENDPOINTS.BLOGS.BASE +
//           API.ENDPOINTS.BLOGS.CURRENT_USER +
//           API.ENDPOINTS.BLOGS.FOLLOW(id),
//         null,
//         {
//           headers: {
//             "x-session-id": sessionToken,
//           },
//         },
//       );
//       return result.data.following;
//     } catch (error) {
//       console.log(error);
//     }
//   }
//   return false;
// }

// export async function getBookmarkBlogs() {
//   const sessionToken = await getSessionToken();
//   if (sessionToken !== undefined) {
//     try {
//       const response = await axios.get(
//         API.BASE_URL + API.ENDPOINTS.BLOGS.BASE + API.ENDPOINTS.BLOGS.BOOKMARKS,
//         {
//           headers: {
//             "X-Session-ID": sessionToken,
//           },
//         },
//       );
//       return response.data;
//     } catch (error) {
//       console.log(error);
//     }
//   } else {
//     console.error("SESSION TOKEN NOT DEFINED");
//   }
//   return [];
// }

// export async function addBlog(data: any) {
//   try {
//     const sessionToken = await getSessionToken();
//     if (sessionToken !== undefined) {
//       const response = await axios.post(
//         API.BASE_URL + 
//         data,
//         {
//           headers: {
//             "X-Session-ID": sessionToken,
//           },
//         },
//       );
//       if (response.status == 200) {
//         return response.data;
//       } else {
//         throw new Error("Blog creation failed");
//       }
//     } else {
//       throw new Error("Session token not defined");
//     }
//   } catch (error) {
//     console.error(error);
//     throw error;
//   }
// }

// export async function getCurrentUser(sessionTokenMiddleware?: string) {
//   try {
//     const sessionToken =
//       sessionTokenMiddleware !== undefined
//         ? sessionTokenMiddleware
//         : await getSessionToken();

//     if (!sessionToken) {
//       throw new Error("Session ID not found");
//     }

//     const response = await fetch(
//       `${API.BASE_URL}${API.ENDPOINTS.BLOGS.BASE}${API.ENDPOINTS.BLOGS.CURRENT_USER}`,
//       {
//         method: "GET",
//         headers: {
//           "X-Session-ID": sessionToken,
//         },
//       },
//     );

//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//     return {};
//   }
// }

// export async function getUser(_id: string) {
//   try {
//     const sessionToken = await getSessionToken();
//     if (sessionToken !== undefined) {
//       const response = await axios.get(
//         API.BASE_URL + API.ENDPOINTS.BLOGS.BASE + API.ENDPOINTS.BLOGS.USER(_id),
//         {
//           headers: {
//             "X-Session-ID": sessionToken,
//           },
//         },
//       );
//       return response.data;
//     } else {
//       throw new Error("Session Id not found");
//     }
//   } catch (error) {
//     console.error(error);
//     return {};
//   }
// }

// export async function getSearch(query: string) {
//   try {
//     const response = await axios.get(
//       API.BASE_URL +
//         API.ENDPOINTS.BLOGS.BASE +
//         API.ENDPOINTS.BLOGS.SEARCH(query),
//     );
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return {"users": [], "blogs": []};
//   }
// }