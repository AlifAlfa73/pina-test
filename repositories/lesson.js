const db = require("../data/db.js");


function returnOnlyDefinedProps(sourceObject, props) {
    const targetObject = {};
  
    props.forEach(property => {
      if (sourceObject[property] !== undefined) {
        targetObject[property] = sourceObject[property];
      }
    });
  
    return targetObject;
}

async function createLesson(data) {
    const id_lesson = await db.insert({
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      image_link: data.image_link,
      type: data.type,
      is_published: data.is_published,
      created_at: Date.now(),
    }).into('lesson')
      .returning('id_lesson');
    
    return { id_lesson: id_lesson[0] };
}

async function updateLesson(lessonId, data) {
    data.updated_at = Date.now();

    const result = await db.table('lesson')
        .where({
            id_lesson: lessonId
        })
        .update(
            returnOnlyDefinedProps(data, [
                'title',
                'subtitle',
                'description',
                'image_link',
                'type',
                'is_published',
                'created_at',
                'updated_at',
          ])
        );
    
    return result;
}

async function deleteLesson(lessonId) {
    const result = await db.table('lesson')
        .where({
            id_lesson: lessonId
        })
        .del();
    
    return result;
}

async function getLessons(options) {
    const query = db('lesson').select('*');

    if (options.title != null) {
        query.where('title', 'like', `%${options.title}%`);
    }

    if (options.type != null) {
        query.where('type', options.type);
    }

    const sortBy = {
        column: options.sortBy ? options.sortBy : 'created_at',
        order: options.order ? options.order : 'desc'
    };

    if (sortBy.column == 'date'){
        sortBy.column = 'created_at';
    }

    query.orderBy([sortBy]);


    const result = await query;
    
    return { result };
}

async function getLessonById(lessonId) {
    const result = await db.select('*')
      .from('lesson')
      .where({
          id_lesson: lessonId,
      });
    
    return result[0];
}

module.exports = {
    createLesson,
    updateLesson,
    deleteLesson,
    getLessons,
    getLessonById,
};