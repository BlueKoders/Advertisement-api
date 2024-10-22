export const permissions = [
  {  role: 'vendor',
    actions: [
        'get_profile',
        'update_profile',
        'add_ads',
        'update_ads',
        'delete_ads',
        'get_ad',
        'get_ads'
    ]
    },
    {
      role: 'user',
      actions:[
        'get_ad',
        'get_ads'
      ]
    },

    { role: 'admin',
      action:[
        'get_profile',
        'update_profile',
        'delete_profile',
        'post_profile',
        'add_todo',
        'update_todo',
        'get_todo',
        'get_todos',
        'delete_todo'
      ]
      
    }
]