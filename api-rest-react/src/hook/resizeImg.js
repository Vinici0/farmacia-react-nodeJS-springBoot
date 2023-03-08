async function reduce_image_file_size(
  base64Str,
  MAX_WIDTH = 450,
  MAX_HEIGHT = 450
) {
  let resized_base64 = await new Promise((resolve) => {
    let img = new Image();
    img.src = base64Str;
    img.onload = () => {
      let canvas = document.createElement("canvas"); // Create a canvas with the desired dimensions
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else {
        if (height > MAX_HEIGHT) {
          width *= MAX_HEIGHT / height;
          height = MAX_HEIGHT;
        }
      }
      canvas.width = width;
      canvas.height = height;
      let ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL()); // this will return base64 image results after resize
    };
  });
  return resized_base64;
}

function calc_image_size(image) {
  let y = 1;
  if (image.endsWith("==")) {
    y = 2;
  }
  const x_size = image.length * (3 / 4) - y;
  return Math.round(x_size / 1024);
}

const convertBase64 = async (file) => {
  let result_base64 = await new Promise((resolve) => {
    let fileReader = new FileReader();
    fileReader.onload = (e) => resolve(fileReader.result);
    fileReader.onerror = (error) => {
      console.log(error);
      alert("An Error occurred please try again, File might be corrupt");
    };
    if (file){
      fileReader.readAsDataURL(file);
    } else {
      resolve(null);
    }    
  });
  return result_base64;
};

export async function process_image(file, min_image_size = 40) {
    //convertBase64
    const res = await convertBase64(file);
    if (res) {
      const old_size = calc_image_size(res);
      console.log("old_size", old_size);
      if (old_size > min_image_size) {
        const resized = await reduce_image_file_size(res);
        const new_size = calc_image_size(resized);
        console.log("new_size=> ", new_size, "KB");
        console.log("old_size=> ", old_size, "KB");
        return resized;
      } else {
        console.log("image already small enough");
        return res;
      }
    } else {
      console.log("return err");
      return null;
    }
  }
