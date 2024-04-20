import dbConnect from '@/db';
import MenuItems from '@/models/MenuItems';
type PipelineStage =
  | {
      $search: {
        index: string;
        text: {
          query: string;
          fuzzy: {
            maxEdits: number;
            prefixLength: number;
            maxExpansions: number;
          };
          path: {
            wildcard: string;
          };
        };
      };
    }
  | {
      $match: {
        category: string;
      };
    }
  | {
      $skip: number;
    }
  | {
      $limit: number;
    };

export async function getCategoryMenuItems({
  category,
  query,
  page = 1,
  limit = 10,
}: {
  category: string;
  query?: string;
  page?: number;
  limit?: number;
}) {
  try {
    await dbConnect();
    const skip = (page - 1) * limit;
    const pipeline: PipelineStage[] = [
      { $match: { category: category } },
      { $skip: skip },
      { $limit: limit },
    ];

    if (query) {
      pipeline.unshift({
        $search: {
          index: 'menuSearch',
          text: {
            query,
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3,
              maxExpansions: 50,
            },
            path: {
              wildcard: '*',
            },
          },
        },
      });
    }
    const items = await MenuItems.aggregate(pipeline);
    console.log(pipeline);
    return items;
  } catch (error) {
    throw new Error('get menu items error: ' + error);
  }
}

export async function getMenuItems({
  query,
  page = 1,
  limit = 10,
}: {
  query?: string;
  page: number;
  limit: number;
}) {
  try {
    await dbConnect();
    const skip = (page - 1) * limit;
    const pipeline: PipelineStage[] = [{ $skip: skip }, { $limit: limit }];

    if (query) {
      pipeline.unshift({
        $search: {
          index: 'menuSearch',
          text: {
            query,
            fuzzy: {
              maxEdits: 1,
              prefixLength: 3,
              maxExpansions: 50,
            },
            path: {
              wildcard: '*',
            },
          },
        },
      });
    }
    const items = await MenuItems.aggregate(pipeline);

    return items;
  } catch (error) {
    throw new Error('get menu items error: ' + error);
  }
}
