
export default function handler(req, res) {
    console.log('get application list')
    console.log('called')
    res.status(200).json({
        "pagination": {
            "total_results": 3,
            "total_pages": 2,
            "first": {
                "href": "https://api.example.org/v3/apps?page=1&per_page=2"
            },
            "last": {
                "href": "https://api.example.org/v3/apps?page=2&per_page=2"
            },
            "next": {
                "href": "https://api.example.org/v3/apps?page=2&per_page=2"
            },
            "previous": null
        },
        "resources": [
            {
                "guid": "1cb006ee-fb05-47e1-b541-c34179ddc446",
                "name": "my_app",
                "state": "STARTED",
                "created_at": "2016-03-17T21:41:30Z",
                "updated_at": "2016-03-18T11:32:30Z",
                "lifecycle": {
                    "type": "buildpack",
                    "data": {
                        "buildpacks": ["java_buildpack"],
                        "stack": "cflinuxfs3"
                    }
                },
                "relationships": {
                    "space": {
                        "data": {
                            "guid": "2f35885d-0c9d-4423-83ad-fd05066f8576"
                        }
                    }
                },
                "links": {
                    "self": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446"
                    },
                    "space": {
                        "href": "https://api.example.org/v3/spaces/2f35885d-0c9d-4423-83ad-fd05066f8576"
                    },
                    "processes": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/processes"
                    },
                    "packages": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/packages"
                    },
                    "environment_variables": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/environment_variables"
                    },
                    "current_droplet": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/droplets/current"
                    },
                    "droplets": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/droplets"
                    },
                    "tasks": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/tasks"
                    },
                    "start": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/actions/start",
                        "method": "POST"
                    },
                    "stop": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/actions/stop",
                        "method": "POST"
                    },
                    "revisions": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/revisions"
                    },
                    "deployed_revisions": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/revisions/deployed"
                    },
                    "features": {
                        "href": "https://api.example.org/v3/apps/1cb006ee-fb05-47e1-b541-c34179ddc446/features"
                    }
                },
                "metadata": {
                    "labels": {},
                    "annotations": {}
                }
            },
            {
                "guid": "02b4ec9b-94c7-4468-9c23-4e906191a0f8",
                "name": "my_app2",
                "state": "STOPPED",
                "created_at": "1970-01-01T00:00:02Z",
                "updated_at": "2016-06-08T16:41:26Z",
                "lifecycle": {
                    "type": "buildpack",
                    "data": {
                        "buildpacks": ["ruby_buildpack"],
                        "stack": "cflinuxfs3"
                    }
                },
                "relationships": {
                    "space": {
                        "data": {
                            "guid": "2f35885d-0c9d-4423-83ad-fd05066f8576"
                        }
                    }
                },
                "links": {
                    "self": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8"
                    },
                    "space": {
                        "href": "https://api.example.org/v3/spaces/2f35885d-0c9d-4423-83ad-fd05066f8576"
                    },
                    "processes": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/processes"
                    },
                    "packages": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/packages"
                    },
                    "environment_variables": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/environment_variables"
                    },
                    "current_droplet": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/droplets/current"
                    },
                    "droplets": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/droplets"
                    },
                    "tasks": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/tasks"
                    },
                    "start": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/actions/start",
                        "method": "POST"
                    },
                    "stop": {
                        "href": "https://api.example.org/v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/actions/stop",
                        "method": "POST"
                    },
                    "revisions": {
                        "href": "https://api.example.org//v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/revisions"
                    },
                    "deployed_revisions": {
                        "href": "https://api.example.org//v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/revisions/deployed"
                    },
                    "features": {
                        "href": "https://api.example.org//v3/apps/02b4ec9b-94c7-4468-9c23-4e906191a0f8/features"
                    }
                },
                "metadata": {
                    "labels": {},
                    "annotations": {}
                }
            }
        ]
    })
}
