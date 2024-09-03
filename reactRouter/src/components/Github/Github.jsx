import React, { useEffect, useState } from "react"

export default function Github() {
  const [data, setData] = useState()
  useEffect(() => {
    fetch("https://api.github.com/users/ads-794")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (
    <div>
      Git Followers : {data.followers}
      {/* <img src={data.avatar_url} alt="Git profile pic" width={300} /> */}
    </div>
  )
}
