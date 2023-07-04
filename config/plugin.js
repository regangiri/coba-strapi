module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_jOBYntpBK4kI7S7NVedbBwsLj6Br/hhfiXnlhMP",
      apiToken: "vnGwWmDWXANAKAfDMQYOyK3d",
      appFilter: "coba-strapi",
      teamFilter: "team_9qLyEVlSXRq8Va2bq7HiziHF",
      roles: ["Author", "Editor", "Super Admin"],
    },
  },
});
